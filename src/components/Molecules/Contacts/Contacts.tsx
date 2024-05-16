import { CONTACTS_LINKS } from "@common/constants";
import { useCustomTranslation } from "@common/i18n";
import { LinkedIn, Twitter, GitHub } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const getContacts = (tc: (msg: string) => string) => {
  return [
    { id: 0, title: "phone", value: CONTACTS_LINKS.PHONE },
    { id: 1, title: "email", value: CONTACTS_LINKS.EMAIL },
    { id: 2, title: "address", value: tc(String(CONTACTS_LINKS.ADDRESS)) },
    { id: 3, title: "telegram", value: CONTACTS_LINKS.TELEGRAM },
  ];
};

const socials = [
  { id: 0, link: "https://www.linkedin.com", icon: LinkedIn },
  { id: 1, link: "https://vk.com/webslava92", icon: LinkedIn },
  { id: 2, link: "https://twitter.com/", icon: Twitter },
  { id: 3, link: "https://github.com/gitslava92", icon: GitHub },
];

export const Contacts = () => {
  const { tc } = useCustomTranslation();

  return (
    <>
      {getContacts(tc).map((contact) => (
        <Box display="flex" sx={{ marginBottom: 1 }} key={contact.id}>
          <Typography variant="h5" sx={{ marginRight: 2, minWidth: 80 }}>{`${tc(
            contact.title
          )}:`}</Typography>
          <Typography variant="body1">{contact.value}</Typography>
        </Box>
      ))}

      <Box display="flex">
        <Typography
          variant="body1"
          sx={{ marginRight: 2, minWidth: 80 }}
        >{`${tc("socials")}:`}</Typography>
        {socials.map((social) => {
          const Icon = social.icon;
          return <Icon key={social.id} />;
        })}
      </Box>
    </>
  );
};
