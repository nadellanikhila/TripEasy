import { render, waitFor } from "@testing-library/react";
import React from "react";
import Property from "../Components/Property_Listings";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([
      {
        _id: "65431c85a19911b2adc5497c",
        property_name: "Property 2",
        property_city: "Vista, North Carolin",
        property_image: "3e157c9c-58cf-444b-988a-5537dae79e46-1698897029589.jpg",
        property_description: "15 miles away",
        property_rating_average: 0,
        property_nightly_fare: 700,
        property_owner: "pranavanand@gmail.com",
        is_available: true,
        is_deleted: false,
        createdAt: "2023-11-02T03:50:29.598Z",
        updatedAt: "2023-11-02T03:51:58.699Z",
        __v: 0,
      },
    ]),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});
it("should ", async () => {
  const { getAllByTestId, getByTestId } = render(<Property />);
  expect(getByTestId("property-listing")).toBeDefined();

  await new Promise((r) => setTimeout(r, 2000));

  expect(getAllByTestId("property-card").length).toBe(1);
});
