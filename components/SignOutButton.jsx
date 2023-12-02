import { useMsal } from "@azure/msal-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

/**
 * Renders a sign out button
 */
export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  };

  return (
    <DropdownMenuItem onClick={() => handleLogout("popup")}>
      Log out
    </DropdownMenuItem>
  );
};
