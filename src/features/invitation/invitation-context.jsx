import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchInvitation } from "@/services/api";

const InvitationContext = createContext(null);

export function InvitationProvider({ children }) {

  // ✅ Simple fixed UID (not using URL anymore)
  const invitationUid = "demo";

  const {
    data: config,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["invitation", invitationUid],
    queryFn: async () => {
      const response = await fetchInvitation(invitationUid);
      return response; // ✅ IMPORTANT FIX
    },
    staleTime: 10 * 60 * 1000,
  });

  return (
    <InvitationContext.Provider
      value={{
        uid: invitationUid,
        config,
        isLoading,
        error: error?.message,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
}

