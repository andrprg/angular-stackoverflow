export interface ISite {
    aliases: string[]
    styling: IStyling
    related_sites: IRelatedSite[]
    markdown_extensions: string[]
    launch_date: number
    open_beta_date: number
    site_state: string
    high_resolution_icon_url: string
    favicon_url: string
    icon_url: string
    audience: string
    site_url: string
    api_site_parameter: string
    logo_url: string
    name: string
    site_type: string
  }
  
  export interface IStyling {
    tag_background_color: string
    tag_foreground_color: string
    link_color: string
  }
  
  export interface IRelatedSite {
    relation: string
    api_site_parameter?: string
    site_url: string
    name: string
  }