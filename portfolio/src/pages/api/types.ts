export interface Repository {
    created_at(created_at: any): import("react").ReactNode;
    updated_at(updated_at: any): import("react").ReactNode;
    name: string;
    html_url: string;
  }
  