import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TabIcon from "@mui/icons-material/Tab";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "@remix-run/react";
import InfoIcon from "@mui/icons-material/Info";

export default function MyNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (location.pathname === "/") setValue(0);
    else if (location.pathname === "/tab1") setValue(1);
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) navigate("/");
    else if (newValue === 1) navigate("/tab1");
    else if (newValue === 2) navigate("/tab2");
    else if (newValue === 3) navigate("/tab3");
    else if (newValue === 4) navigate("/tab4");
    else if (newValue === 5) navigate("/tab5");
    else if (newValue === 6) navigate("/tab6");
    else if (newValue === 7) navigate("/tab7");
    else if (newValue === 8) navigate("/tab8");
    else if (newValue === 9) navigate("/tab9");
    else if (newValue === 10) navigate("/about");
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{ width: "100%", position: "fixed", bottom: 0 }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Tab 1" icon={<TabIcon />} />
      <BottomNavigationAction label="Tab 2" icon={<TabIcon />} />
      <BottomNavigationAction label="Tab 3" icon={<TabIcon />} />
      <BottomNavigationAction label="Tab 4" icon={<TabIcon />} />
      <BottomNavigationAction label="Tab 5" icon={<TabIcon />} />
      <BottomNavigationAction label="Tab 6" icon={<TabIcon />} />
      <BottomNavigationAction label="Tab 7" icon={<TabIcon />} />
      <BottomNavigationAction label="Tab 8" icon={<TabIcon />} />
      <BottomNavigationAction label="Tab 9" icon={<TabIcon />} />
      <BottomNavigationAction label="About" icon={<InfoIcon />} />
    </BottomNavigation>
  );
}
