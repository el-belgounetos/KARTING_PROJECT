package fr.eb.tournament.service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

/**
 * Service for generating QR codes.
 */
@Service
@Slf4j
public class QRCodeService {

    /**
     * Generates a QR code image as PNG bytes.
     *
     * @param text   The text/URL to encode in the QR code
     * @param width  The width of the QR code in pixels
     * @param height The height of the QR code in pixels
     * @return PNG image as byte array
     * @throws WriterException if QR code generation fails
     * @throws IOException     if image writing fails
     */
    public byte[] generateQRCode(String text, int width, int height) throws WriterException, IOException {
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, width, height);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "PNG", outputStream);

        log.debug("Generated QR code for: {}", text);
        return outputStream.toByteArray();
    }
}
