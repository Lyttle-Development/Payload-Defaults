import type {AcceptedLanguages, Language} from '@payloadcms/translations';

export interface Constants {
    DEFAULT_LOCALE?: AcceptedLanguages;
    SUPPORTED_LANGUAGES?: SupportedLanguage[];
    WEBSITE_NAME?: string;
    MODULE_ENABLED?: ModuleEnabled;
    GLOBAL_ENABLED?: GlobalEnabled;
}

export interface ModuleEnabled {
    categories: boolean;
    'form-submissions': boolean;
    forms: boolean;
    media: boolean;
    pages: boolean;
    posts: boolean;
    redirects: boolean;
    search: boolean;
    users: boolean;
}

export interface GlobalEnabled {
    header: boolean;
    footer: boolean;
}

export interface SupportedLanguage {
    code: AcceptedLanguages;
    label: string;
    payload: Language;
}
