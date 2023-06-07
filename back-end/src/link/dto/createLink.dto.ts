export class CreateLinkDto {
  readonly label: string;
  readonly url: string;
  readonly image: string;
  readonly active: boolean;
  readonly sectionId: string;
  readonly userId: string;
}
