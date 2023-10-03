import { getUser } from "@/features/auth/api/getUser";
import storage from "@/utils/storage";

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

export { loadUser };
