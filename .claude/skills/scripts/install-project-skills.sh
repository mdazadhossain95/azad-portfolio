#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/skills"
PROJECT_ROOT="${1:-$(pwd)}"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Skill source directory not found: $SOURCE_DIR" >&2
  exit 1
fi

for target in "$PROJECT_ROOT/.claude/skills" "$PROJECT_ROOT/.agents/skills"; do
  mkdir -p "$target"
  for skill_path in "$SOURCE_DIR"/*; do
    skill_name="$(basename "$skill_path")"
    rm -rf "$target/$skill_name"
    cp -R "$skill_path" "$target/$skill_name"
  done
  echo "Installed project skills into $target" >&2
done

echo '{"status":"ok","installed":[".claude/skills",".agents/skills"]}'
