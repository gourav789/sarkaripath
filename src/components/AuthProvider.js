"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext({
  user: null,
  loading: true,
  paid: false,
  signInWithGoogle: async () => {},
  signUpWithEmail: async () => {},
  signInWithEmail: async () => {},
  resetPassword: async () => {},
  logout: async () => {},
  refreshPaidStatus: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paid, setPaid] = useState(false);

  const fetchPaidStatus = useCallback(async (currentUser) => {
    if (!currentUser) {
      setPaid(false);
      return false;
    }
    try {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const isPaid = !!docSnap.data()?.paid;
        setPaid(isPaid);
        return isPaid;
      } else {
        setPaid(false);
        return false;
      }
    } catch (err) {
      console.error("Error fetching user paid status:", err);
      setPaid(false);
      return false;
    }
  }, []);

  const refreshPaidStatus = useCallback(async () => {
    const targetUser = auth.currentUser || user;
    if (targetUser) {
      return await fetchPaidStatus(targetUser);
    }
    setPaid(false);
    return false;
  }, [fetchPaidStatus, user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await fetchPaidStatus(currentUser);
      } else {
        setPaid(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [fetchPaidStatus]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signUpWithEmail = async (email, password, displayName) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (displayName && displayName.trim()) {
      await updateProfile(userCredential.user, {
        displayName: displayName.trim(),
      });
      setUser({ ...userCredential.user, displayName: displayName.trim() });
    }
    return userCredential;
  };

  const signInWithEmail = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = async () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        paid,
        signInWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        resetPassword,
        logout,
        refreshPaidStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
