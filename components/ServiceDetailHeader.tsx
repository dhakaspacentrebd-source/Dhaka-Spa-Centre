import { Service } from "@/data/services";
import { BookingSelector } from "./BookingSelector";
export function ServiceDetailHeader({ service }: { service: Service }) {
  return <BookingSelector service={service} />;
}
