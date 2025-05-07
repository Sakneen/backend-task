import { Controller, Get, Param } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property } from '../database/schemas/property.schema';
import { HTTPResponse } from '../common/http/response';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  async findAll(): Promise<HTTPResponse<Property[]>> {
    return {
      data: await this.propertiesService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<HTTPResponse<Property>> {
    return {
      data: await this.propertiesService.findById(id),
    };
  }
}
