# Change log — 2025-12-19

Summary
- Removed a Remix-generated type import that didn't exist in this project and updated `meta` to be parameter-less in `app/routes/home.tsx`.
- Fixed the Tailwind background URL parentheses in `app/routes/home.tsx`.
- Imported `Link` from `react-router` in `app/components/Navbar.tsx` to resolve "Cannot find name 'Link'".

Why these changes were made
- Your project is not a Remix app (no `remix` deps in `package.json`), so generated Remix types under `./+types/*` do not exist — importing them caused TypeScript to complain and the `Route` import was unused.
- The `Link` reference in `Navbar.tsx` was missing an import, so TypeScript reported `Cannot find name 'Link'`.

How to test
- Run `npm run typecheck` and ensure there are no TypeScript errors.
- Start the dev server with `npm run dev` and browse the app to confirm the navbar link works and the homepage renders without TypeScript or runtime errors.

How to revert
- If you want to undo the changes made in the working tree (before committing), run:
  - `git checkout -- app/routes/home.tsx app/components/Navbar.tsx docs/change-log-2025-12-19.md`
- If you already committed and want to rollback to the previous commit, use `git revert` or `git reset --hard <previous-commit>` as appropriate.

If you later decide to use Remix
- Initialize Remix or install Remix packages, and run the Remix typegen to generate `./+types/*` files. Then you can re-introduce Remix-specific type imports if desired.

Notes for beginners
- Always look at `package.json` to know what frameworks/libraries are actually installed — some tutorials assume different setups.
- Keep this `docs` file as a small audit trail so you can understand why edits were made if an error appears later.

Additional edits (2025-12-25):
- Switched `.resumes-section` from a flex-based layout to a responsive **CSS Grid** (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) to prevent overlap and enable proper centering and gaps between cards.
- Updated `.resume-card` to use `w-full max-w-[350px]` so cards center correctly and do not stretch beyond container.
- Made resume images responsive in `app/components/ResumeCard.tsx`: mobile shows `h-[273px]`, `sm:h-[300px]`, `md:h-[350px]`, `lg:h-[420px]` so the image is cropped similarly to the tutorial across breakpoints (never shows full original height on desktop).