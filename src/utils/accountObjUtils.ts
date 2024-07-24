export const getFormattedAccounts = (accounts: any[]) => {
    return accounts.map((account) => {
      return {
        id: account.id,
        FirstName: account.attributes?.FirstName || "N/A",
        organizationType: determineOrganizationType(account),
        clubs: account.attributes?.clubs?.data?.[0]?.attributes?.Name || "N/A",
        associations:
          account.attributes?.associations?.data?.[0]?.attributes?.Name || "N/A",
        Sport: account.attributes?.Sport || "N/A",
        LOGO: getLogo(account),
        isActive: account.attributes?.isActive,
        orders: account.attributes?.orders?.data?.length > 0,
        isSetup: account.attributes?.isSetup,
        isUpdating: account.attributes?.isUpdating,
        hasCompletedStartSequence: account.attributes?.hasCompletedStartSequence,
        isRightsHolder: account.attributes?.isRightsHolder,
        isPermissionGiven: account.attributes?.isPermissionGiven,
        group_assets_by: account.attributes?.group_assets_by,
      };
    });
  };

  const determineOrganizationType = (account: any) => {
    return account?.attributes?.account_type?.data?.attributes?.Name || "Unknown";
  };

  const getLogo = (account: any) => {
    const organizationType = determineOrganizationType(account);
    if (organizationType === "Association") {
      return (
        account.attributes?.associations?.data?.[0]?.attributes?.ParentLogo ||
        "N/A"
      );
    } else if (organizationType === "Club") {
      return (
        account.attributes?.clubs?.data?.[0]?.attributes?.ParentLogo || "N/A"
      );
    } else {
      return "N/A";
    }
  };