import { jobs } from "@/lib/jobs-data";
import JobsPortal from "../jobs/jobs-portal";

export const metadata = {
  title: "Jobs Portal — Starfii",
  description:
    "Open roles at Starfii. Search by title, skill or location and apply in minutes.",
};

// Re-render hourly so the "new" / "trending" windows stay accurate.
export const revalidate = 3600;

export default function JobsPortalPage() {
  // Computed on the server and passed down, so the client uses the exact same
  // reference time and date-derived badges can't cause a hydration mismatch.
  return <JobsPortal jobs={jobs} now={Date.now()} />;
}