import { describe, expect, test } from "vitest";
import { ServiceFail, ServiceSuccess } from "~/lib/serviceResult.server";
import { type LanguageModel, LanguageService } from "~/usescases/languages";

const createLanguage: LanguageModel.LanguageCreateRequest = {
    personId: '97cbc5dd-4e34-43a1-ac1e-65927c1d9473',
    language: 'Portuguese',
    languageLevel: 4
}

describe('languages - use cases', () => {
    let _oid = '';

    test('Create a new Language', async () => {
        const result = await LanguageService.addLanguage(createLanguage)
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<LanguageModel.LanguageResponse>;
        expect(outcome.value).not.toBeNull();
        expect(outcome.value.oid).not.toBeNull();
        expect(outcome.value.message).eq("Language has been added.")
        _oid = outcome.value.oid;
    });

    test('Fail to create Language', async () => {
        const result = await LanguageService.addLanguage({
            personId: '97cbc5dd-4e34-43a1-ac1e-65927c1d9473',
            language: 'French',
            languageLevel: 0
        });
        expect(result.kind).toBe('fail');

        const outcome = result as ServiceFail;

        expect(outcome.reason).not.toBeNull();
        expect(outcome.reason.languageLevel).toBe('Number must be greater than or equal to 1');
    });

    test('Update existing Language',async () => {
        const result = await LanguageService.updateLanguage({
            oid: _oid,
            language: 'English',
            languageLevel: 3 
        });
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<LanguageModel.LanguageResponse>;
        expect(outcome.value).not.toBeNull();
        expect(outcome.value.oid).not.toBeNull();
        expect(outcome.value.message).eq("Language has been updated.")
    })

    test('Delete existing Language', async () => {
        const result = await LanguageService.deleteLanguage(_oid);
        expect(result.kind).toBe('success');

        const outcome = result as ServiceSuccess<LanguageModel.LanguageResponse>;

        expect(outcome.value).not.toBeNull();
        expect(outcome.value.message).eq("Language has been deleted.")
    })
})