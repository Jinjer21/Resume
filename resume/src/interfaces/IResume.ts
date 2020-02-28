import IEducation from "./IEducation";
import IEmploymentDetails from "./IEmplyomentDetails";
import IContactDetails from "./IContactDetails";

export default interface IResume {
    Name: String;
    ContactDetails: IContactDetails;
    Education: IEducation[];
    EmploymentHistory: IEmploymentDetails[];
}