export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_utc: string;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
  };
  launch_success: boolean;
  details: string;
  links: {
    mission_patch_small: string;
  };
}
