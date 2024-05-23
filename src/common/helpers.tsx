import { capitalize } from "@common/i18n";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/ru";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

export const getPeriod = (period: string[], tc: (msg: string) => string) => {
  const language = localStorage.getItem("language") || "ru";
  const format = language === "ru" ? "MMMM, YYYY" : "MMM, YYYY";

  dayjs.locale(language);

  if (period.length > 1) {
    return `${capitalize(dayjs(period[0]).format(format))} - ${
      period[1] === "present"
        ? tc(period[1])
        : capitalize(dayjs(period[1]).format(format))
    }`;
  } else
    return `${
      period[0] === "present"
        ? tc(period[0])
        : capitalize(dayjs(period[0]).format(format))
    }`;
};
