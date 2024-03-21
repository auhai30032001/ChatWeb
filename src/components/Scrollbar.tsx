import { Box } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/material/styles";
import colorConfigs from "../configs/colorConfigs";

interface ScrollbarProps {
  children: React.ReactNode;
  sx?: SxProps<Theme> | undefined;
}

const RootStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  userSelect: "none",
  overflow: "hidden overlay",
  "&::-webkit-scrollbar": {
    width: 5,
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: colorConfigs.mainBg,
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: colorConfigs.chatpage.scrollbar,
    borderRadius: "1rem",
  },
}));

function Scrollbar({ children, sx, ...other }: ScrollbarProps) {
  return (
    <RootStyle>
      <Box sx={sx} {...other}>
        {children}
      </Box>
    </RootStyle>
  );
}
export default Scrollbar;
