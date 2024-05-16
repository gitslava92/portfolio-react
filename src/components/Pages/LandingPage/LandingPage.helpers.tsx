import { LANDING_SECTIONS } from "@common/constants";

export const getMenuItems = (
  visibleSections: LANDING_SECTIONS[],
  tc: (msg: string) => string
) => {
  const sections = [
    {
      id: 0,
      title: tc("hello"),
      to: LANDING_SECTIONS.Hello,
    },
    {
      id: 1,
      title: tc("skills"),
      to: LANDING_SECTIONS.Skills,
    },
    {
      id: 2,
      title: tc("experience"),
      to: LANDING_SECTIONS.Experience,
    },
    {
      id: 3,
      title: tc("education"),
      to: LANDING_SECTIONS.Education,
    },
    {
      id: 4,
      title: tc("portfolio"),
      to: LANDING_SECTIONS.Portfolio,
    },
    {
      id: 5,
      title: tc("feedback"),
      to: LANDING_SECTIONS.Feedback,
    },
    {
      id: 6,
      title: tc("contact me"),
      to: LANDING_SECTIONS.Contact,
    },
  ];

  return sections.filter((section) => visibleSections.includes(section.to));
};
