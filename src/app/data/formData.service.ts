import { Injectable }      from '@angular/core';
import { FormData,StudentInfo, ParentInfo,PreviousStudyInfo, PaymentInfo, EnclosureInfo}   from './formData.model';
 
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {
 
    private formData: FormData = new FormData();
    private isStudentFormValid: boolean = false;
    private isParentInfoFormValid: boolean = false;
    private isPreviousStudyFormValid : boolean = false;
    private isEnclosureFormValid : boolean = false;
    constructor(private workflowService: WorkflowService) { 
    }
    getStudentInfo(): StudentInfo {
        // Return the StudentInfo data
        var studentInfo: StudentInfo = 
        {
        firstName: this.formData.firstName,
        middleName: this.formData.lastName,
        lastName:  this.formData.lastName,
        gender :  this.formData.gender,
        dateOfBirth:  this.formData.dateOfBirth,
        bloodgroup:  this.formData.bloodgroup,
        religion:  this.formData.religion,
        caste:  this.formData.caste,
        nationality:  this.formData.nationality,
        aadharNo:  this.formData.aadharNo,
        community: this.formData.community,
        languagesKnown:this.formData.languagesKnown,
        motherTongue: this.formData.motherTongue,
        residentialAddress: this.formData.residentialAddress,
        correspondenceAddress: this.formData.correspondenceAddress,
        guardiansMobileNumber: this.formData.guardiansMobileNumber,
        fathersMobileNumber: this.formData.fathersMobileNumber,
        mothersMobileNumber : this.formData.mothersMobileNumber,
        prefMobileNumbSchoolComm: this.formData.prefMobileNumbSchoolComm,
        prefEmailSchoolComm: this.formData.prefEmailSchoolComm,
        emergencyContactName: this.formData.emergencyContactName,
        emergencyContactNumber :this.formData.emergencyContactNumber,
        emergencyEmail: this.formData.emergencyEmail,
        emergencyRelationship: this.formData.emergencyRelationship     
    
        };
        return studentInfo;
    }
 
    setStudentInfo(data: StudentInfo) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isStudentFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.middleName = data.middleName;
        this.formData.lastName = data.lastName;
        this.formData.gender  = data.gender;
        this.formData.dateOfBirth = data.dateOfBirth;
        this.formData.bloodgroup = data.bloodgroup;
        this.formData.religion = data.religion,
        this.formData.caste = data.caste,
        this.formData.nationality = data.nationality,
        this.formData.aadharNo = data.aadharNo,
        this.formData.community = data.community,
        this.formData.languagesKnown = data.languagesKnown,
        this.formData.motherTongue = data.motherTongue,
        this.formData.residentialAddress = data.residentialAddress,
        this.formData.correspondenceAddress = data.correspondenceAddress,
        this.formData.guardiansMobileNumber = data.guardiansMobileNumber,
        this.formData.fathersMobileNumber = data.fathersMobileNumber,
        this.formData.mothersMobileNumber  = data.mothersMobileNumber,
        this.formData.prefMobileNumbSchoolComm = data.prefMobileNumbSchoolComm,
        this.formData.prefEmailSchoolComm = data.prefEmailSchoolComm,
        this.formData.emergencyContactName = data.emergencyContactName,
        this.formData.emergencyContactNumber  = data.emergencyContactNumber,
        this.formData.emergencyEmail = data.emergencyEmail,
        this.formData.emergencyRelationship = data.emergencyRelationship  
         // Validate Personal Step in Workflow
         this.workflowService.validateStep(STEPS.student);
    }
 
    getParentInfo() : ParentInfo {
        // Return the ParentInfo data
        var parentInfo:ParentInfo = {
            fatherName:  this.formData.fatherName,
            fatherAge:   this.formData.fatherAge ,
            fatherAadhar: this.formData.fatherAadhar ,
            fatherNationality: this.formData.fatherNationality ,
            fatherQualification: this.formData.fatherQualification ,
            fatherOccupation: this.formData.fatherOccupation ,
            fatherDesignation: this.formData.fatherDesignation ,
            fatherOfficeAddress: this.formData.fatherOfficeAddress ,
            fatherMobile: this.formData.fatherMobile ,
            fatherEmail: this.formData.fatherEmail ,
            //fatherAnnualIncome:this.formData.fatherAnnualIncome ,
            motherName: this.formData.motherName ,
            motherAge: this.formData.motherAge ,
            motherAadhar: this.formData.motherAadhar ,
            motherNationality: this.formData.motherNationality ,
            motherQualification: this.formData.motherQualification ,
            motherOccupation: this.formData.motherOccupation ,
            motherDesignation: this.formData.motherDesignation ,
            motherOfficeAddress:this.formData.motherOfficeAddress ,
            motherMobile: this.formData.motherMobile ,
            motherEmail: this.formData.motherEmail ,
           // motherAnnualIncome: string = '';
            siblingName: this.formData.siblingName ,
            siblingInstName:this.formData.siblingInstName ,
            siblingStandard: this.formData.siblingStandard
        };
        return parentInfo;

    }
    
    setParentInfo(data: ParentInfo) {
        // Update the parent type only when the Parent Info Form had been validated successfully
        this.isParentInfoFormValid = true;
        this.formData.fatherName= data.fatherName;
        this.formData.fatherAge= data.fatherAge;
        this.formData.fatherAadhar= data.fatherAadhar;
        this.formData.fatherNationality= data.fatherNationality;
        this.formData.fatherQualification= data.fatherQualification;
        this.formData.fatherOccupation= data.fatherOccupation;
        this.formData.fatherDesignation= data.fatherDesignation;
        this.formData.fatherOfficeAddress= data.fatherOfficeAddress;
        this.formData.fatherMobile= data.fatherMobile;
        this.formData.fatherEmail= data.fatherEmail;
        //this.fatherAnnualIncome= data.;
        this.formData.motherName= data.motherName;
        this.formData.motherAge= data.motherAge;
        this.formData.motherAadhar= data.motherAadhar;
        this.formData.motherNationality= data.motherNationality;
        this.formData.motherQualification= data.motherQualification;
        this.formData.motherOccupation= data.motherOccupation;
        this.formData.motherDesignation= data.motherDesignation;
        this.formData.motherOfficeAddress= data.motherOfficeAddress;
        this.formData.motherMobile= data.motherMobile;
        this.formData.motherEmail= data.motherEmail;
       //this.motherAnnualIncome= data.;
        this.formData.siblingName= data.siblingName;
        this.formData.siblingInstName= data.siblingInstName;
        this.formData.siblingStandard= data.siblingStandard;
         // Validate Work Step in Workflow
         this.workflowService.validateStep(STEPS.parent);
    }
 
    getPreviousStudyInfo(): PreviousStudyInfo {
        // Return the previousStudyInfo data
        var previousStudyInfo: PreviousStudyInfo = 
        { 
            year:  this.formData.year,
            school:   this.formData.school ,
            affiliatedBoard:   this.formData.affiliatedBoard ,
            standard:   this.formData.standard ,
            finalExamGrade:   this.formData.finalExamGrade ,
            totalMarks:   this.formData.totalMarks ,
            reasonforLeaving:   this.formData.reasonforLeaving ,
        };
        return previousStudyInfo;

    }
    setPreviousStudyInfo(data: PreviousStudyInfo) {
        this.isPreviousStudyFormValid=true;
        this.formData.year= data.year;
        this.formData.school= data.school;
        this.formData.affiliatedBoard= data.affiliatedBoard;
        this.formData.finalExamGrade= data.finalExamGrade;
        this.formData.totalMarks= data.totalMarks;
        this.formData.reasonforLeaving= data.reasonforLeaving;
         // Validate Work Step in Workflow
         this.workflowService.validateStep(STEPS.previousStudy);
    }
    setEnclosureInfo(data:EnclosureInfo)
    {
    this.isEnclosureFormValid=true;
    this.formData.birthCertificate=data.birthCertificate;
    this.formData.transferCertificate=data.transferCertificate;
    this.formData.threeYearProgressReport=data.threeYearProgressReport;
    this.formData.bloodGroupReport=data.bloodGroupReport;
    this.formData.studentPassportPicture=data.studentPassportPicture;
    this.formData.fatherPassportPicture=data.fatherPassportPicture;
    this.formData.motherPassportPicture=data.motherPassportPicture;
    this.formData.GuardianPassportSizePic=data.GuardianPassportSizePic;
    this.formData.aadharScanCopyofStudent=data.aadharScanCopyofStudent;
    this.formData.aadharScanCopyofFather=data.aadharScanCopyofFather;
    this.formData.aadharScanCopyofMother=data.aadharScanCopyofMother;
    this.formData.scstobcewcCertificate=data.scstobcewcCertificate;
     // Validate Work Step in Workflow
     this.workflowService.validateStep(STEPS.enclosure);   
    }
    getEnclosureInfo()
    {
        // Return the previousStudyInfo data
        var enclosureInfo: EnclosureInfo = 
        { 
            birthCertificate:this.formData.birthCertificate,
            transferCertificate:this.formData.transferCertificate,
            threeYearProgressReport:this.formData.threeYearProgressReport,
            bloodGroupReport:this.formData.bloodGroupReport,
            studentPassportPicture:this.formData.studentPassportPicture,
            fatherPassportPicture:this.formData.fatherPassportPicture,
            motherPassportPicture:this.formData.motherPassportPicture,
            GuardianPassportSizePic:this.formData.GuardianPassportSizePic,
            aadharScanCopyofStudent:this.formData.aadharScanCopyofStudent,
            aadharScanCopyofFather:this.formData.aadharScanCopyofFather,
            aadharScanCopyofMother:this.formData.aadharScanCopyofMother,
            scstobcewcCertificate:this.formData.scstobcewcCertificate
        };
        return enclosureInfo;
    }
   setConfirmDetailInfo()
    {
         // Validate Work Step in Workflow
         this.workflowService.validateStep(STEPS.confirmDetails);
    }
    getPaymentInfo()
    {
        // Return the previousStudyInfo data
        var paymentInfo: PaymentInfo = 
        { 
            paymentMedium:  this.formData.paymentMedium,
            reference:   this.formData.reference ,
            amount:   this.formData.amount 
        };
        return paymentInfo;
    }
    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }
 
    resetFormData(): FormData {
         // Reset the workflow
         this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isStudentFormValid = this.isParentInfoFormValid =this.isPreviousStudyFormValid= false;
        return this.formData;
    }
 
    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isStudentFormValid && this.isParentInfoFormValid && this.isPreviousStudyFormValid && this.isEnclosureFormValid;
    }
}
