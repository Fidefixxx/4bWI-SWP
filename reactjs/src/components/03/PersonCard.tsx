import React, { useState } from "react";

export default function PersonCard({ name, title, iconurl }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 border w-auto rounded h-auto">
      <div className="ml-2 w-auto">
        <p className="text-2xl">{name}</p>
        <p className="text-sm italic">{title}</p>
      </div>
      <div className="w-auto h-40">
        {hasError ? (
          <img
            className="w-auto h-40 object-cover rounded border-red-600 border-4"
            src="https://support.heberjahiz.com/hc/article_attachments/21013076295570"
            alt=""
          />
        ) : (
          <img
            className="w-auto h-40 object-cover rounded"
            src={iconurl}
            alt=""
            onError={(err) => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}
