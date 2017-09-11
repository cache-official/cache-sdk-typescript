/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 NEM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {MessageDTO} from "./Message";
import {TransactionDTO} from "./TransactionDTO";
import {MosaicDTO} from "../mosaic/MosaicDTO";

/**
 * @internal
 * The transfer transaction structure describes basic information for a transfer transaction.
 */
export interface TransferTransactionDTO extends TransactionDTO {

  /**
   * The amount of micro NEM that is transferred from sender to recipient. 1 XEM = 1000000 microNem.
   */
  readonly amount: number;

  /**
   * The address of the recipient.
   */
  readonly recipient: string;

  /**
   * Optionally a transaction can contain a message. In this case the transaction contains a message substructure. If not the field is null.
   */
  readonly message: MessageDTO;

  /**
   * The array of Mosaic objects.
   */
  readonly mosaics?: MosaicDTO[];

}