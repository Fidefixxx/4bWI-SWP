import React, { useState } from "react";

export default function PersonCard({ name, title, iconurl }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div class="flex items-center justify-between gap-4 border w-auto rounded h-auto">
      <div class="ml-2 w-auto">
        <p class="text-2xl">{name}</p>
        <p class="text-sm italic">{title}</p>
      </div>
      <div className="w-auto h-40">
        {hasError ? (
          <img
            class="w-auto h-40 object-cover rounded border-red-600 border-4"
            src="https://support.heberjahiz.com/hc/article_attachments/21013076295570"
            alt=""
          />
        ) : (
          <img
            class="w-auto h-40 object-cover rounded"
            src={iconurl}
            alt=""
            onError={(err) => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}
