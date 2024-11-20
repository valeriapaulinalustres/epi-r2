import { URI } from "../../../utils/endpoints";
import { BodyGetDataFilteredYearMonthsHealthcenterId } from "../../../utils/interfaces";

export const getDataFilteredByYearMonthsHealthcenterIdService = async (body: BodyGetDataFilteredYearMonthsHealthcenterId) => {
  const url = `${URI}/api/data/get-data-filtered-year-month-healthcenter`;
  console.log("del service", body);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return response;
};
