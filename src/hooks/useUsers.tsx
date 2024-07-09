import { useMutation, useQuery } from "@tanstack/react-query";
import UserService from "../services/UserService";
import { User } from "../models/user";

export function useCreateUser() {
  const { mutateAsync } = useMutation({
    mutationKey: ["create-user"],
    mutationFn: (user: User) => {
      return UserService.createUser(user);
    },
  });

  return {
    createUser: mutateAsync,
  };
}

export function useReadUser(userId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["read-user"],
    queryFn: () => {
      return UserService.readUser(userId);
    },
  });

  return {
    data,
    isLoading,
  };
}

export function useReadUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["read-users"],
    queryFn: () => {
      return UserService.readUsers();
    },
  });

  return {
    data,
    isLoading,
  };
}

export function useUpdateUser() {
  const { mutateAsync } = useMutation({
    mutationKey: ["update-user"],
    mutationFn: ({ userId, user }: { userId: string; user: User }) => {
      return UserService.updateUser(userId, user);
    },
  });

  return {
    updateUser: mutateAsync,
  };
}

export function useDeleteUser() {
  const { mutateAsync } = useMutation({
    mutationKey: ["delete-user"],
    mutationFn: (userId: string) => {
      return UserService.deleteUser(userId);
    },
  });

  return {
    deleteUser: mutateAsync,
  };
}
