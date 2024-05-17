export interface Projects {
  object: string;
  results: Result[];
}

interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: { object: string; id: string };
  last_edited_by: { object: string; id: string };
  cover: any;
  icon: any;
  parent: any;
  archived: false;
  in_trash: false;
  properties: any;
  url: string;
  public_url: any;
}
