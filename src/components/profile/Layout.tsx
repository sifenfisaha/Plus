import React from "react";
import Input from "../ui/Input";
import {
  useDeleteUser,
  useUpdateUser,
  useUser,
} from "../../features/profile/hooks";
import { Save, TrashIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { type ProfileInput, profileSchem } from "../../utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../app/hooks";
import { updateProfile } from "../../features/auth/authSlice";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, isPending: userPending } = useUser();
  const user = data?.user;
  const memberSince = user
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : "";
  const { mutate: deleteUser, isPending: deletePending } = useDeleteUser();
  const { mutate: updateUser, isPending: updatePending } = useUpdateUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<ProfileInput>({
    resolver: zodResolver(profileSchem),
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
    },
  });

  const submitHandler = (values: ProfileInput) => {
    updateUser(values, {
      onSuccess: () => reset(values),
    });
    dispatch(
      updateProfile({
        email: values.email,
        first_name: values.first_name,
        id: user._id,
      })
    );
  };

  if (userPending) {
    return <p>Loading...</p>;
  }

  return (
    <div className="md:min-w-2xl mx-4 my-8">
      <h1 className="text-2xl dark:text-white">Profile Settings</h1>
      <p className="text-neutral-500">
        Manage your account settings and preferences.
      </p>

      <div className="p-4 mt-8 border border-neutral-300 dark:border-neutral-700 rounded-xl">
        <h2 className="text-xl dark:text-white">Profile Information</h2>
        <p className="text-neutral-500">
          Update your account details and public profile information.
        </p>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4 mt-4">
          <div>
            <Input
              label="First name"
              {...register("first_name")}
              placeholder="Abebe"
            />
            {errors.first_name && (
              <p className="text-sm text-red-500 mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Last name"
              {...register("last_name")}
              placeholder="Beso"
            />
            {errors.last_name && (
              <p className="text-sm text-red-500 mt-1">
                {errors.last_name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Email"
              {...register("email")}
              placeholder="john@example.com"
              type="email"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isDirty || updatePending}
            className={`px-4 py-2 ${!isDirty || updatePending ? "cursor-not-allowed" : "cursor-pointer"}  bg-black dark:bg-white  dark:text-black flex items-center gap-2 text-white rounded-sm disabled:opacity-50`}
          >
            <Save className="text-shadow-gradient-light w-5" />
            {updatePending ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
      <div className="p-4 mt-8 border border-neutral-300 dark:border-neutral-700  rounded-xl">
        <h2 className="text-xl dark:text-white">Account Information</h2>
        <p className="text-neutral-500">
          View your account details and membership information.
        </p>
        <div className="flex items-center justify-between mt-4">
          <p className="dark:text-white font-semibold text-base">
            Member Since
          </p>
          <p className="dark:text-neutral-300 text-neutral-600 text-base">
            {memberSince}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="dark:text-white font-semibold text-base">Account ID</p>
          <p className="dark:text-neutral-300 text-neutral-600 text-base">
            {user._id}
          </p>
        </div>
      </div>

      <div className="p-4 border-[1px] border-red-600 my-7 rounded-2xl">
        <h1 className="text-xl text-red-500 dark:text-white">Danger Zone</h1>
        <p className="text-neutral-500">
          These actions are irreversible. Please proceed with caution.
        </p>
        <button
          onClick={() => deleteUser()}
          disabled={deletePending}
          className="px-4 gap-2 hover:bg-red-800 duration-200 transition-all ease-in-out py-2 flex rounded-sm items-center justify-center bg-red-600 cursor-pointer dark:bg-red-700 mt-3 text-white disabled:opacity-50"
        >
          <TrashIcon className="w-5" />
          {deletePending ? "Deleting account..." : "Delete account"}
        </button>
      </div>
    </div>
  );
};

export default Layout;
