// src/lib/syncUserToSupabase.js
import { supabase } from "./supabase";

export async function syncUserToSupabase(firebaseUser) {
  try {
    // 1️⃣ Get Firebase ID token
    const token = await firebaseUser.getIdToken(true);

    // 2️⃣ Create Supabase client WITH auth header
    const supabaseWithAuth = supabase.auth.setAuth(token);

    // 3️⃣ Upsert user
    const { error } = await supabaseWithAuth
      .from("users")
      .upsert(
        {
          id: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName ?? "",
          created_at: new Date().toISOString(),
        },
        { onConflict: "id" }
      );

    if (error) {
      console.error("Supabase user sync failed:", error);
      throw error;
    }
  } catch (err) {
    console.error("Supabase user sync failed:", err);
    throw err;
  }
}
