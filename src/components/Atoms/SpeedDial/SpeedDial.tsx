import { useCustomTranslation } from "@common/i18n";
import { DarkMode, Translate, Settings } from "@mui/icons-material";
import { SpeedDialAction, SpeedDial as MUISpeedDial } from "@mui/material";

const actions = [
  { icon: <Translate />, name: "select language" },
  { icon: <DarkMode />, name: "select theme" },
];

export const SpeedDial = () => {
  const { tc } = useCustomTranslation();
  return (
    <MUISpeedDial
      ariaLabel={tc("settings")}
      sx={{ position: "fixed", bottom: 16, left: 16 }}
      icon={<Settings fontSize="small" />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </MUISpeedDial>
  );
};
