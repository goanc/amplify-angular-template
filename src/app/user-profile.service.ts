// import { Injectable } from '@angular/core';
// import { generateClient } from 'aws-amplify/data';
// import { Schema } from '../../amplify/data/resource';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserProfileService {
//   private client = generateClient<Schema>();

//   async createUserProfile(profileData: {
//     email: string;
//     username: string;
//     firstName?: string;
//     lastName?: string;
//     profilePictureUrl?: string;
//     dateOfBirth?: string;
//     preferences?: Record<string, unknown>;
//   }) {
//     try {
//       const result = await this.client.models['UserProfile'].create(profileData);
//       return result;
//     } catch (error) {
//       console.error('Error creating user profile', error);
//       throw error;
//     }
//   }

//   async getUserProfile(id: string) {
//     try {
//       const { data, errors } = await this.client.models['UserProfile'].get({ id });
//       if (errors) throw errors;
//       return data;
//     } catch (error) {
//       console.error('Error fetching user profile', error);
//       throw error;
//     }
//   }

//   async listUserProfiles(filters?: {
//     firstName?: string;
//     lastName?: string;
//     email?: string;
//     registrationDateFrom?: string;
//     registrationDateTo?: string;
//   }) {
//     try {
//       // Construct the filter object dynamically
//       const filterConditions: Record<string, any> = {};

//       if (filters?.firstName) {
//         filterConditions['firstName'] = { contains: filters.firstName };
//       }

//       if (filters?.lastName) {
//         filterConditions['lastName'] = { contains: filters.lastName };
//       }

//       if (filters?.email) {
//         filterConditions['email'] = { contains: filters.email };
//       }

//       if (filters?.registrationDateFrom && filters?.registrationDateTo) {
//         filterConditions['registrationDate'] = {
//           between: [filters.registrationDateFrom, filters.registrationDateTo]
//         };
//       }

//       // Fetch filtered user profiles
//       const { data, errors } = await this.client.models['UserProfile'].list({
//         filter: Object.keys(filterConditions).length > 0 ? filterConditions : undefined,
//         limit: 50
//       });

//       if (errors) throw errors;

//       return data;
//     } catch (error) {
//       console.error('Error fetching user profiles', error);
//       throw error;
//     }
//   }

//   async searchUsers(searchTerm: string) {
//     return this.listUserProfiles({
//       firstName: searchTerm,
//       lastName: searchTerm,
//       email: searchTerm
//     });
//   }
// }