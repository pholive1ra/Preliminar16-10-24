// src/app/survey.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class SurveyService {
    private accessToken: string = 'duVhzwcSRhDNfxxVlxPa2ir18YsKfHEdj5mziy5.iNFQ8gA-22QvaNF-QZ3zdYttBfTyiiTErrZHDOhmwF02rqVBwG.r0ZkYDr2m61EZYuiB74.RkZgh5G85oWyLUWfl';
    private baseUrl: string = 'https://api.surveymonkey.com/v3';

    constructor() {}

    async createSurvey(title: string) {
        try {
            const surveyData = {
                title: title,
                // Outros dados necessários conforme a documentação do SurveyMonkey
            };

            const response = await axios.post(`${this.baseUrl}/surveys`, surveyData, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data; // Retorna os dados da pesquisa criada
        } catch (error) {
            console.error('Erro ao criar pesquisa:', error);
            throw error; // Lança o erro para ser tratado posteriormente
        }
    }
}
