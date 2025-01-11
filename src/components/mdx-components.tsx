import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { AtomIcon } from "lucide-react";

import { Question } from "./Question";
import { Answer } from "./Answer";
import { Divider } from "./Divider";
import { ProfileCard } from "./ProfileCard";
import { HintTooltip } from "./HintTooltip";
import { Curation } from "./Curation";
import { BlogListPage } from "../pages/BlogListPage";
import { CurationListPage } from "../pages/CurationListPage";
import { DocsListPage } from "../pages/DocsListPage";

export const mdxComponents = {
  ...defaultMdxComponents,
  Tab,
  Tabs,
  Step,
  Steps,
  File,
  Folder,
  Files,
  AtomIcon,
  Curation,
  Question,
  Answer,
  Divider,
  ProfileCard,
  HintTooltip,
  BlogListPage,
  CurationListPage,
  DocsListPage,
};
