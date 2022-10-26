import { Menu, Button, Text, Avatar } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons";
import { useState } from "react";
import { userDTO } from "..";
import { auth } from "../../../config/firebase-config";

interface UserProfileProps {
  user: userDTO;
}
function UserProfile(props: UserProfileProps) {
  const { displayName, photoURL } = props.user;
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(props);
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "20px",
      }}
    >
      {photoURL ? (
        <div>
          <Menu shadow="md" position="bottom-end" width={150}>
            <Menu.Target>
              <Avatar
                src={photoURL}
                radius="xl"
                style={{
                  cursor: "pointer",
                }}
              />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<IconMessageCircle size={14} />}>
                Messages
              </Menu.Item>
              <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
              <Menu.Item
                icon={<IconSearch size={14} />}
                rightSection={
                  <Text size="xs" color="dimmed">
                    ⌘K
                  </Text>
                }
              >
                Search
              </Menu.Item>
              <Menu.Divider />

              <Menu.Item color="red" onClick={logout}>
                Sign Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      ) : (
        <div>
          <Button component="a" href="/auth">
            Sign In
          </Button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
