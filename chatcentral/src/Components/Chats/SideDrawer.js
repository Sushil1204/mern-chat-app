import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { BellIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, Tooltip, Text, Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModel from "./ProfileModel";


const SideDrawer = () => {
  
 const { user } = ChatState();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItem="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search User to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <SearchIcon/>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
              </Tooltip>
              <Text fontSize="2xl" fontFamily="work sans">
                  Chat Central
              </Text>
              <div>
                  <Menu>
                      <MenuButton p={1}>
                          <BellIcon fontSize="2xl" m={1}/>
                      </MenuButton>
                      {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Avatar size='sm' cursor='pointer' name={user.name} src={user.pic} />
            </MenuButton>
            <MenuList>
              <ProfileModel user={ user}>
              <MenuItem>My Profile</MenuItem>

              </ProfileModel>
              <MenuDivider/>
              <MenuItem>Logout</MenuItem>
             </MenuList>

          </Menu>
              </div>
      </Box>
    </>
  );
};

export default SideDrawer;
