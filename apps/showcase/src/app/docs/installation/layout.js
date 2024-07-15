import Menu from "@/components/layouts/menu";
import SectionNav from "@/components/layouts/sectionNav";
import doc from "./doc";

export const metadata = {
  title: "Installation",
  description: "Generated by create next app",
};

export default function DocLayout ({ children }) {
    return (
      <div className='doc-component'>
        <div className="doc-tabpanel">
          <div className="doc-main">
            {children}
          </div>
            <SectionNav className='doc-section-nav' sections={doc.sections} />
        </div>
      </div>
  );
}
