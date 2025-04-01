import React from "react";
import { Header, Page } from "zmp-ui";
import { SearchBar } from "../components/common/search-bar";
import { QuestionSection, SearchFAQs } from "../components/FAQsPage";

const FAQsPage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-surface">
      <Header title="FAQs" className="topbar h-auto flex-none pl-4" />
      <div className="flex flex-1 flex-col gap-5 overflow-auto px-3 py-5">
        <div className="flex flex-col gap-3">
          <SearchFAQs />
          {Array.from({ length: 3 }).map((_, index) => (
            <QuestionSection key={index} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default FAQsPage;
