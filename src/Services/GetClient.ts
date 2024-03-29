import { Account } from "../Utility/GlobalTypes";

const GetClient = async (clientId: string): Promise<Account | null> => {
  try {

    const response = await fetch(`${process.env.REACT_APP_BE_URL}/Client/getClient?clientId=${encodeURIComponent(clientId)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    // use FE Logger when set up ('Error posting profile data')
    return null;
  }
};

export default GetClient;