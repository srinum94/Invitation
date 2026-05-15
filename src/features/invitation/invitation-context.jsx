import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchInvitation } from "@/services/api";

const InvitationContext = createContext(null);

export function InvitationProvider({ children }) {

  // ✅ Static UID (no URL dependency)
  const invitationUid = "demo";

  const {
    data: config,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["invitation", invitationUid],
    queryFn: async () => {
      return await fetchInvitation(invitationUid); // ✅ NO success check
    },
    staleTime: 10 * 60 * 1000,
  });

  return (
    <InvitationContext.Provider
      value={{
        uid: invitationUid,
        config,
        isLoading,
        error: error?.message || null,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
}

/**
 * ✅ REQUIRED EXPORT (this fixes your error)
 */
export function useInvitation() {
  const context = useContext(InvitationContext);

  if (!context) {
    throw new Error("useInvitation must be used within InvitationProvider");
  }

  return context;
}
