import React from "react";
import CountryModal from "./CountryModal";
import CurrencyModal from "./CurrencyModal";
import ModalLanguages from "./ModalLanguages";
import SettingBasicContent from "./SettingBasicContent";
export default function BasicIndex({
  gendersInputs,
  globalSettingTranslate = {},
  basicTitle,
  setBasicTitle,
  theme,
  handleCreateGenders,
  setBasicInputs,
  basicInputs,
  errors,
  handelDeleteGender,
  handleShowGenders,
  handleChangeGenderItem,
  handleUpdateGender,
  securityQuestionInputs,
  handelDeleteSecurityQuestions,
  handleCreateSecurityQuestions,
  handleShowSecurityQuestions,
  handleChangeSecurityQuestionsItem,
  handleUpdateSecurityQuestions,
  academicInputs,
  handleCreateAcademic,
  handleShowAcademic,
  handleChangeAcademicItem,
  handleUpdateAcademic,
  handelDeleteAcademic,
  skillsInputs,
  handleCreateDomination,
  handleShowDomination,
  handleChangeDominationItem,
  handleUpdateDomination,
  handelDeleteDomination,
  languageLevelInputs,
  handleCreateLanguageLevel,
  handleShowLanguageLevel,
  handleChangeLanguageLevelItem,
  handleUpdateLanguageLevel,
  handelDeleteLanguageLevel,
  drivingInputs,
  handleCreateDrivingLicenses,
  handleShowDrivingLicenses,
  handleChangeDrivingLicensesItem,
  handleUpdateDrivingLicenses,
  handelDeleteDrivingLicenses,
  languageCertificateInputs,
  handleCreateCertificates,
  handleShowCertificates,
  handleChangeCertificatesItem,
  handleUpdateCertificates,
  handelDeleteCertificates,
  industryInputs,
  handleCreateIndustry,
  handleShowIndustry,
  handleChangeIndustryItem,
  handleUpdateIndustry,
  handelDeleteIndustry,
  nationalityInputs,
  handleCreateNationality,
  handleShowNationality,
  handleChangeNationalityItem,
  handleUpdateNationality,
  handelDeleteNationality,
  languagesInputs,
  handleCreateLanguages,
  handleShowLanguages,
  handleUpdateLanguages,
  handelDeleteLanguages,
  employmentInputs,
  handleCreateEmployment,
  handleShowEmployment,
  handleChangeEmploymentItem,
  handleUpdateEmployment,
  handelDeleteEmployment,
  timeZoneInputs,
  handleCreateTimeZone,
  handleShowTimeZone,
  handleChangeTimeZoneItem,
  handleUpdateTimeZone,
  handelDeleteTimeZone,
  countries,
  handleShowCountryForm,
  handelDeleteCountry,
  handleShowCountry,
  currency,
  handleShowCurrencies,
  handelDeleteCurrencies,
  handleShowCurrencyForm,
  languages,
  handleShowLanguagesModal,
  setCountryModal,
  countryModal,
  countryInputs,
  handleUpdateCountry,
  handleCreateCountry,
  setCountryInputs,
  setCurrencyModal,
  currencyModal,
  currnecyInputs,
  setCurrencyInputs,
  handleUpdateCurrencies,
  handleCreateCurrencies,
  languagesModal,
  setLanguagesModal,
  setLanguagesInputs,
  isUpdatedCountry,
  isUpdatedCurrency,
  isUpdatedLanguages,
  handleChangeTab,
  tab,
  salaryInputs,
  handleCreateSalary,
  handleShowSalary,
  handleChangeSalaryItem,
  handleUpdateSalary,
  handelDeleteSalary,
}) {
  return (
    <>
      <SettingBasicContent
        tab={tab}
        handleChangeTab={handleChangeTab}
        gendersInputs={gendersInputs}
        globalSettingTranslate={globalSettingTranslate}
        basicTitle={basicTitle}
        setBasicTitle={setBasicTitle}
        theme={theme}
        handleCreateGenders={handleCreateGenders}
        setBasicInputs={setBasicInputs}
        basicInputs={basicInputs}
        errors={errors}
        handelDeleteGender={handelDeleteGender}
        handleShowGenders={handleShowGenders}
        handleChangeGenderItem={handleChangeGenderItem}
        handleUpdateGender={handleUpdateGender}
        securityQuestionInputs={securityQuestionInputs}
        handelDeleteSecurityQuestions={handelDeleteSecurityQuestions}
        handleCreateSecurityQuestions={handleCreateSecurityQuestions}
        handleShowSecurityQuestions={handleShowSecurityQuestions}
        handleChangeSecurityQuestionsItem={handleChangeSecurityQuestionsItem}
        handleUpdateSecurityQuestions={handleUpdateSecurityQuestions}
        academicInputs={academicInputs}
        handleCreateAcademic={handleCreateAcademic}
        handleShowAcademic={handleShowAcademic}
        handleChangeAcademicItem={handleChangeAcademicItem}
        handleUpdateAcademic={handleUpdateAcademic}
        handelDeleteAcademic={handelDeleteAcademic}
        skillsInputs={skillsInputs}
        handleCreateDomination={handleCreateDomination}
        handleShowDomination={handleShowDomination}
        handleChangeDominationItem={handleChangeDominationItem}
        handleUpdateDomination={handleUpdateDomination}
        handelDeleteDomination={handelDeleteDomination}
        languageLevelInputs={languageLevelInputs}
        handleCreateLanguageLevel={handleCreateLanguageLevel}
        handleShowLanguageLevel={handleShowLanguageLevel}
        handleChangeLanguageLevelItem={handleChangeLanguageLevelItem}
        handleUpdateLanguageLevel={handleUpdateLanguageLevel}
        handelDeleteLanguageLevel={handelDeleteLanguageLevel}
        drivingInputs={drivingInputs}
        handleCreateDrivingLicenses={handleCreateDrivingLicenses}
        handleShowDrivingLicenses={handleShowDrivingLicenses}
        handleChangeDrivingLicensesItem={handleChangeDrivingLicensesItem}
        handleUpdateDrivingLicenses={handleUpdateDrivingLicenses}
        handelDeleteDrivingLicenses={handelDeleteDrivingLicenses}
        languageCertificateInputs={languageCertificateInputs}
        handleCreateCertificates={handleCreateCertificates}
        handleShowCertificates={handleShowCertificates}
        handleChangeCertificatesItem={handleChangeCertificatesItem}
        handleUpdateCertificates={handleUpdateCertificates}
        handelDeleteCertificates={handelDeleteCertificates}
        industryInputs={industryInputs}
        handleCreateIndustry={handleCreateIndustry}
        handleShowIndustry={handleShowIndustry}
        handleChangeIndustryItem={handleChangeIndustryItem}
        handleUpdateIndustry={handleUpdateIndustry}
        handelDeleteIndustry={handelDeleteIndustry}
        nationalityInputs={nationalityInputs}
        handleCreateNationality={handleCreateNationality}
        handleShowNationality={handleShowNationality}
        handleChangeNationalityItem={handleChangeNationalityItem}
        handleUpdateNationality={handleUpdateNationality}
        handelDeleteNationality={handelDeleteNationality}
        languagesInputs={languagesInputs}
        handleCreateLanguages={handleCreateLanguages}
        handleShowLanguages={handleShowLanguages}
        handleUpdateLanguages={handleUpdateLanguages}
        handelDeleteLanguages={handelDeleteLanguages}
        employmentInputs={employmentInputs}
        handleCreateEmployment={handleCreateEmployment}
        handleShowEmployment={handleShowEmployment}
        handleChangeEmploymentItem={handleChangeEmploymentItem}
        handleUpdateEmployment={handleUpdateEmployment}
        handelDeleteEmployment={handelDeleteEmployment}
        timeZoneInputs={timeZoneInputs}
        handleCreateTimeZone={handleCreateTimeZone}
        handleShowTimeZone={handleShowTimeZone}
        handleChangeTimeZoneItem={handleChangeTimeZoneItem}
        handleUpdateTimeZone={handleUpdateTimeZone}
        handelDeleteTimeZone={handelDeleteTimeZone}
        countries={countries}
        handleShowCountryForm={handleShowCountryForm}
        handelDeleteCountry={handelDeleteCountry}
        handleShowCountry={handleShowCountry}
        currency={currency}
        handleShowCurrencies={handleShowCurrencies}
        handelDeleteCurrencies={handelDeleteCurrencies}
        handleShowCurrencyForm={handleShowCurrencyForm}
        languages={languages}
        handleShowLanguagesModal={handleShowLanguagesModal}
        salaryInputs={salaryInputs}
        handleCreateSalary={handleCreateSalary}
        handleShowSalary={handleShowSalary}
        handleChangeSalaryItem={handleChangeSalaryItem}
        handleUpdateSalary={handleUpdateSalary}
        handelDeleteSalary={handelDeleteSalary}
      />
      <CountryModal
        handleClose={() => setCountryModal(false)}
        theme={theme}
        visible={countryModal}
        countryInputs={countryInputs}
        setCountryInputs={setCountryInputs}
        onFinish={isUpdatedCountry ? handleUpdateCountry : handleCreateCountry}
        globalSettingTranslate={globalSettingTranslate}
      />
      <CurrencyModal
        handleClose={() => setCurrencyModal(false)}
        theme={theme}
        visible={currencyModal}
        currnecyInputs={currnecyInputs}
        setCurrencyInputs={setCurrencyInputs}
        onFinish={
          isUpdatedCurrency ? handleUpdateCurrencies : handleCreateCurrencies
        }
        globalSettingTranslate={globalSettingTranslate}
      />
      <ModalLanguages
        theme={theme}
        visible={languagesModal}
        handleClose={() => setLanguagesModal(false)}
        languagesInputs={languagesInputs}
        setLanguagesInputs={setLanguagesInputs}
        globalSettingTranslate={globalSettingTranslate}
        onFinish={
          isUpdatedLanguages ? handleUpdateLanguages : handleCreateLanguages
        }
      />
    </>
  );
}
