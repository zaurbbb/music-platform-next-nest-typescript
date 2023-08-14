export const getActionName = (
  actionType: string,
  requestStatus: string = "fulfilled",
): string => {
  const pattern = new RegExp(`\/([^/]+)\/${requestStatus}$`);
  return actionType.match(pattern)?.[1];
};
