export type User = {
    id: string;
    name: string;
  };
  
  export function validateUser(user: User): boolean {
    return !!user.name;
  }
  