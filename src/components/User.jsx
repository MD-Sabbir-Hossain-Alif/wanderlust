import { Avatar } from "@heroui/react";

const User = ({ user }) => {
    return (
        <Avatar>
            <Avatar.Image
                alt={user?.name}
                src={
                    user?.image ||
                    "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                }
            />
            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>
    );
};

export default User;
