import { useState, useEffect } from "react";

export default function Editor({ currentTheme, setBody }) {
  const [value, setValue] =
      useState(`-- Run actual SQL online! API Docs on Github.
-- Use the editor to create new tables, insert data and most other SQL operations.
-- I might be missing something, you can let me know by creating an issue on Github.

SELECT first_name, last_name, age  FROM CurrentTable;`),
    [AceEditor, setAceEditor] = useState(null);

  useEffect(() => {
    setAceEditor(() => require("react-ace").default);
    require("ace-builds/src-noconflict/mode-mysql");
    require("ace-builds/src-noconflict/theme-dracula");
    require("ace-builds/src-noconflict/theme-cloud9_day");
    require("ace-builds/src-noconflict/ext-language_tools");
  }, []);

  useEffect(() => {
    setBody((prev) => ({ ...prev, code: value }));
  }, [value]);

  return (
    <div className="max-w-screen-xl mx-auto h-full w-full">
      <div className="h-full w-full">
        {AceEditor && (
          <AceEditor
            mode="mysql"
            theme={currentTheme === "dark" ? "dracula" : "cloud9_day"}
            onChange={(e) => setValue(e)}
            name="DARK_EDITOR"
            height="100%"
            width="100%"
            fontSize={24}
            showPrintMargin={false}
            value={value}
            displayIndentGuides={false}
            editorProps={{ $blockScrolling: true }}
          />
        )}
      </div>
    </div>
  );
}
