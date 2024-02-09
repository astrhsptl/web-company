export const BASE_API_URL = "http://176.123.169.53/api/v1";

export const createQueryArgumentString = (searchArgs: object): string => {
  let queryParams = "?";

  for (const [argument, value] of Object.entries(searchArgs)) {
    queryParams += `${argument}=${value}`;
  }

  return queryParams;
};
