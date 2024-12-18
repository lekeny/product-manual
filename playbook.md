# Technical Writing Style Guide Review Playbook

## Purpose
This playbook provides a systematic approach for reviewing technical documentation to ensure consistency with our style guide standards.

## Prerequisites
- Access to the document(s) requiring review
- Access to the following reference files:
  - terminology_rules.md
  - word_choice_rules.md
  - general_rules.md

## Review Procedure

### 1. Initial Setup
1. Open the document(s) to be reviewed
2. Open all reference files (terminology, word choice, and general rules)
3. Create a new review report document using the template below

### 2. Terminology Review
1. Review the entire text against terminology_rules.md
2. Check for:
   - Correct term usage
   - Proper capitalization
   - Correct formatting
   - Consistency across the document
3. Document any violations using the Issue Template

### 3. Word Choice Review
1. Review the text against word_choice_rules.md
2. Check for:
   - Prohibited terms and phrases
   - Non-compliant word choices
3. Document any violations using the Issue Template

### 4. General Rules Review
1. Review the text against general_rules.md
2. Check for:
   - Spelling errors
   - Grammar issues
   - Incorrect contractions
   - Capitalization inconsistencies
   - Other rule violations
3. Document any violations using the Issue Template

## Issue Template
For each issue found, document it in the following format:

```markdown
### Issue Entry
1. **File name**: [Document name]
2. **Issue**: [Description of the incorrect usage]
3. **Rule Violated**: [Specific rule and relevant quote]
4. **Original Text**: [Problematic text]
5. **Suggested Changes**: [Correction]
```

## No Issues Statement
If no issues are found for a particular rule category, use the following format:
```markdown
No issues detected for [Rule Category].
```

## Review Report Template
```markdown
# Style Guide Review Report
Date: [YYYY-MM-DD]
Reviewer: [Name]

## Files Reviewed
- [List of files reviewed]

## Terminology Rule Issues
[Use Issue Template for each issue or No Issues Statement]

## Word Choice Rule Issues
[Use Issue Template for each issue or No Issues Statement]

## General Rule Issues
[Use Issue Template for each issue or No Issues Statement]

## Summary
- Total issues found: [Number]
- Critical issues: [Number]
- Recommendations: [Key recommendations]
```

## Best Practices
1. Review one rule category at a time
2. Document issues as you find them
3. Be specific in issue descriptions
4. Provide clear, actionable suggestions
5. Cross-reference with style guide documents when unsure

## Forbidden Actions
1. Do not modify the original document during review
2. Do not skip any rule categories
3. Do not combine multiple issues into a single entry
4. Do not use informal language in the review report

## Quality Checklist
- [ ] All rule categories reviewed
- [ ] Issues documented using correct template
- [ ] Suggestions are clear and actionable
- [ ] No rules were skipped
- [ ] Report is properly formatted
