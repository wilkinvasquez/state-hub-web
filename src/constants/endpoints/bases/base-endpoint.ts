const API_URL: string = import.meta.env.VITE_API_URL ?? '';

class BaseEndPoint {
   static BASE = `${API_URL}/api`
}

export default BaseEndPoint;