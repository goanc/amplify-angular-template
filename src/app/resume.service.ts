import { Injectable } from '@angular/core';
import { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/api';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  client = generateClient<Schema>();

  async addBlock() {

    const { errors, data: newTodo } = await this.client.models.Block.create({
      groupID: "gdfdfh",
      type: "Text",
      title: "TEST TEST",
      rank: 0,
    })
  }

  async getBlocks() {
    const { data: blocks, errors } = await this.client.models.Block.list();
    console.log(blocks);
  }
}
