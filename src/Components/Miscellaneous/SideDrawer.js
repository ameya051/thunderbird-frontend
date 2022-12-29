import { Box, Button, Text, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";

const SideDrawer = () => {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <Box>
      <Tooltip label="Search users to chat" hasArrow placement="bottom-end">
        <Button variant='ghost'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <Text>Search User</Text>
        </Button>
      </Tooltip>
    </Box>
  );
};

export default SideDrawer;
